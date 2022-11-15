from flask import Flask, request, abort
from subprocess import call


app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        print("THE WEBOOK WORKED")
        call('cd nextjs_ssg', shell=True)
        call('yarn develop', shell=True)
        return 'success', 200
    else:
        abort(400)

if __name__ == '__main__':
    app.run()