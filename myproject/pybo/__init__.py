from flask import Flask

def create_app():
    app = Flask(__name__)
    
    from .views import  main_views, sub_views
    app.register_blueprint(main_views.bp)
    app.register_blueprint(sub_views.bp)
    return app
