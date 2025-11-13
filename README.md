# The Intelligent Resume Matcher 🚀

This project is a full-stack web application designed to be an advanced Information Retrieval (IR) toolkit. It allows users to search a large corpus of resumes using both a standard Vector Space Model and a "Tolerant" search model that handles user errors like typos and wildcards. The core of the project is an implementation of the Rocchio Algorithm for relevance feedback, allowing the system to learn from user input to refine search results.

---

## 📸 Screenshots

*Include screenshots of your application here. A great set would be:*

* **Landing Page:** <img width="1849" height="929" alt="Screenshot from 2025-11-13 19-06-44" src="https://github.com/user-attachments/assets/a92064f0-169d-483a-ba49-72b122a0c2f2" />

* **Dashboard:** <img width="1849" height="929" alt="Screenshot from 2025-11-13 19-09-33" src="https://github.com/user-attachments/assets/5602f2f1-f666-4cf9-a7f0-aefdf15d2f59" />

* **Standard Search (with results):** <img width="1849" height="929" alt="Screenshot from 2025-11-13 19-25-43" src="https://github.com/user-attachments/assets/e534ff61-591a-4c85-806a-fb27ee21eedc" />

* **Tolerant Search (showing a corrected query):** <img width="1849" height="929" alt="Screenshot from 2025-11-13 19-26-18" src="https://github.com/user-attachments/assets/2f59d5f9-4b9a-4224-9a42-d9bd5776f77f" />


---

## ✨ Key Features

This project implements several key concepts from Information Retrieval theory:

* **Component-Based UI:** Built with **React** and **Material-UI** for a clean, responsive user experience.
* **Routing:** A multi-page experience using **React Router**, including a landing page, dashboard, and separate search interfaces.
* **Standard Search:**
    * Implements the **Vector Space Model** using **TF-IDF** for document ranking.
    * Features **Relevance Feedback** using the **Rocchio Algorithm** to learn from user selections and refine results.
* **Tolerant Search:**
    * Provides automatic **Spelling Correction** for query terms using **Edit Distance**.
    * Supports **Wildcard Queries** (`*`) to match word prefixes.
* **Backend API:** A robust backend built with **FastAPI** (Python) serving all the IR logic.
* **Text Processing:** A complete pipeline including **Tokenization**, **Stop Word Removal**, and **Stemming**.

---

## 🛠️ Built With

* **Frontend:**
    * [React.js](https://reactjs.org/)
    * [Material-UI (MUI)](https://mui.com/)
    * [React Router](https://reactrouter.com/)
    * [Axios](https://axios-http.com/)
* **Backend:**
    * [Python](https://www.python.org/)
    * [FastAPI](https://fastapi.tiangolo.com/)
    * [Scikit-learn](https://scikit-learn.org/)
    * [NLTK](https://www.nltk.org/)

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* **Python 3.8+**
* **Node.js & npm**

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/DEVANSHUMARKAM/resume-matcher-frontend
    cd resume-matcher-frontend
    ```

2.  **Setup the Backend:**
    ```sh
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    uvicorn main:app --reload
    ```
    The backend server will be running on `http://127.0.0.1:8000`.

3.  **Setup the Frontend (in a new terminal):**
    ```sh
    cd frontend
    npm install
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
