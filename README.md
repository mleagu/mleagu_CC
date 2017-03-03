# mleagu_CC

Set Up:
  Need to install mysql and create db: ml_cc (username: root, without password)
  Server side:
      - go to root directory (mleagu_CC);
      - install virtual-environemts : pyenv ml_cc_cenv;
      - activate venv: source ml_cc_cenv/bin/activate;
      - install requirements: pip install -r requirements.txt;
      - run migration: python manage.py makemigrations and python manage.py migrate;
      - run server: python manage.py runserver;
  Client Side:
      - install (node version 6.9+);
      - go to client directory and install packages: npm i;
      - run client: npm start;