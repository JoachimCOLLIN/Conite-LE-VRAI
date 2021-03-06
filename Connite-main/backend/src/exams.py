import flask

from .auth import requires_auth
from .db import get_session
from .entities.exam import Exam, ExamSchema

blueprint = flask.Blueprint('exams', __name__)


@blueprint.route('/exams')
def get_exams():
    # fetching from the database
    session = get_session()
    exam_objects = session.query(Exam).all()

    # transforming into JSON-serializable objects
    schema = ExamSchema(many=True)
    exams = schema.dump(exam_objects)

    # serializing as JSON
    session.close()
    return flask.jsonify(exams)


@blueprint.route('/exam/<exam_id>')
def get_exam(exam_id):
    print(f'get exam : {exam_id}')

    # TODO ensure the exam_id gives an existing exam
    db = get_session()
    exam = db.query(Exam).filter_by(id=exam_id).first()
    db.close()

    new_exam = ExamSchema().dump(exam)
    print(new_exam)

    return flask.jsonify(new_exam), 201


@blueprint.route('/exams', methods=['POST'])
#@requires_auth
def add_exam():
    # mount exam object
    posted_exam = ExamSchema(
        only=('title', 'description','localisation','datedelancement','moderateurs')).load(flask.request.get_json())

    exam = Exam(**posted_exam, created_by="HTTP post request")

    # persist exam
    session = get_session()
    session.add(exam)
    session.commit()

    # return created exam
    new_exam = ExamSchema().dump(exam)
    session.close()
    return flask.jsonify(new_exam), 201


@blueprint.route('/exams/<exam_id>', methods=['DELETE'])
#@requires_admin
def delete_exam(exam_id):
    db = get_session()
    exam = db.query(Exam).filter_by(id=exam_id).first()
    db.delete(exam)
    db.commit()
    db.close()
    return '', 201
