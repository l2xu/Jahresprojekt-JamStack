from flask import Flask, request, abort
from subprocess import call


app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        print("THE WEBOOK WORKED")
        call('kill $(lsof -t -i:3000);cd nextjs_ssg; npm run build;npm run start', shell=True)
        return 'success', 200
    else:
        abort(400)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8000')
