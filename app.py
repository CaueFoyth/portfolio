#App para rodar um servidor

from flask import Flask, render_template, redirect


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    #Para atualizar automaticamente no localhost coloque debug=True dentro do run
    app.run(debug=True)
    