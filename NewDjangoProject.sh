source ~{{path-to-django-env}}/bin/activate
cd ~{{path-to-projects-folder}}
django-admin startproject {{name-of-project}}
cd {{name-of-project}}
mkdir apps
cd apps
touch __init__.py
python ../manage.py startapp {{name-of-first_app}}
atom l{{name-of-first_app}}/urls.py {{name-of-first_app}}/views.py {{name-of-first_app}}/models.py ../{{name-of-project}}/settings.py ../{{name-of-project}}/urls.py
python ../manage.py makemigrations
python ../manage.py migrate
cd {{name-of-first_app}}
mkdir templates
cd templates
atom index.html
