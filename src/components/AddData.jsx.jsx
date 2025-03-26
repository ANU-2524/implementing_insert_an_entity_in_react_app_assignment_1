import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddData = () => {
  const navigate = useNavigate();
  const [book, setBook] = React.useState({
    title: '',
    author: '',
    description: '',
    coverImage: '',
  });

  const handleSubmitBtn = (e) => {
    console.log('Submitted !', book);
    e.preventDefault();
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Your Favourite Read!</h2>
      <form onSubmit={handleSubmitBtn} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) =>
            setBook((data) => ({ ...data, [e.target.name]: e.target.value }))
          }
          required
          style={styles.input}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={(e) =>
            setBook((data) => ({ ...data, [e.target.name]: e.target.value }))
          }
          required
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={(e) =>
            setBook((data) => ({ ...data, [e.target.name]: e.target.value }))
          }
          required
          style={styles.textarea}
        ></textarea>
        <input
          type="url"
          name="coverImage"
          placeholder="Cover Image URL"
          onChange={(e) =>
            setBook((data) => ({ ...data, [e.target.name]: e.target.value }))
          }
          required
          style={styles.input}
        />
        <button type="Submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Inline CSS styles object
const styles = {
  container: {
    width: '80%',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '1.8em',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'left',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em',
  },
  textarea: {
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em',
    minHeight: '80px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
    marginTop: '15px',
  },
};

export default AddData;