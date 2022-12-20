import config
from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    
    # 블루프린트
    from .views import  main_views, question_views, answer_views
    app.register_blueprint(main_views.bp)
    app.register_blueprint(question_views.bp)
    app.register_blueprint(answer_views.bp)
    
    
    from .filter import format_datetime
    app.jinja_env.filters['datetime'] = format_datetime
    
    return app
