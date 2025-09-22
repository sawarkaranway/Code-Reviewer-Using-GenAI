import streamlit as st
import requests

BACKEND_URL = "http://localhost:3000/ai/get-review" 
st.title("AI Code Reviewer 🤖")
with st.form("form"):
    user_input = st.text_input("Enter the Code to be reviewed:")
    submitted = st.form_submit_button("Submit");

    if submitted:
        response = requests.post(f"{BACKEND_URL}",json={"code":user_input})
        if response.status_code==200:
            data = response.json()
            st.subheader("Review Result")
            st.json(data)   

                
            if isinstance(data, dict) and "review" in data:
                st.markdown(f"###  Review\n{data['review']}")
        else:
            st.error("Backend error!");