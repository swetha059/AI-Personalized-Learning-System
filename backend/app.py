from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    interest = data.get('interest')

    recommendations = {
        "AI": "Learn Python, Machine Learning and Generative AI",
        "Web Development": "Learn React JS, Node JS and Full Stack Development",
        "Data Science": "Learn Pandas, NumPy and Data Visualization",
        "Cyber Security": "Learn Ethical Hacking and Network Security"
    }

    result = recommendations.get(interest, "Explore trending technologies")

    return jsonify({
        "recommendation": result
    })

if __name__ == '__main__':
    app.run(debug=True)