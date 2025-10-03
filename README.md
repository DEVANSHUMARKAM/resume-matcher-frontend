# The Intelligent Resume Matcher 🚀

This project is a full-stack web application designed to be an advanced Information Retrieval (IR) toolkit. It allows users to search a large corpus of resumes using both a standard Vector Space Model and a "Tolerant" search model that handles user errors like typos and wildcards. The core of the project is an implementation of the Rocchio Algorithm for relevance feedback, allowing the system to learn from user input to refine search results.

---

## 📸 Screenshots

*Include screenshots of your application here. A great set would be:*

* **Landing Page:** `[Your Screenshot of the Landing Page]`
* **Dashboard:** `[Your Screenshot of the Dashboard]`
* **Standard Search (with results):** `[Your Screenshot of the Standard Search]`
* **Tolerant Search (showing a corrected query):** `[Your Screenshot of the Tolerant Search]`

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
    git clone [Your GitHub Repository URL]
    cd resume-matcher
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