import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "./AdminContacts.css"; // Import the CSS file

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken || "",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Contacts Data:", data);
      setContactData(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    getAllContactsData();
  }, []);

  // Function to delete an item
  const deleteContact = (index) => {
    const updatedContacts = contactData.filter((_, i) => i !== index);
    setContactData(updatedContacts);
  };

  return (
    <div className="contacts-container">
      {contactData.length > 0 ? (
        contactData.map((curElem, index) => (
          <div key={index} className="contact-box">
            <p><strong>Username:</strong> {curElem.username || "N/A"}</p>
            <p><strong>Email:</strong> {curElem.email || "N/A"}</p>
            <p><strong>Message:</strong> {curElem.message || "N/A"}</p>
            <button className="delete-btn" onClick={() => deleteContact(index)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default AdminContacts;
