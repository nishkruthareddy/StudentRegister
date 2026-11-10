from fastapi import FastAPI
from datetime import datetime

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Hello! Python Docker Application is Running!"
    }

@app.get("/health")
def health():
    return {
        "status": "success",
        "message": "Python application is healthy"
    }

@app.get("/message")
def message():
    return {
        "message": "Hello from Python FastAPI!",
        "timestamp": datetime.now().isoformat()
    }