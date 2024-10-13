import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';

export const ProfileView = () => {
//const { user, updateUser, deregisterUser, addFavoriteMovie, removeFavoriteMovie } = useAuth(); // Assuming you have an authentication context
//const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  
    const handleUpdateUser = (event) => {
      event.preventDefault();
  
      const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      };

      fetch(`${process.env.REACT_APP_API_URL}/users/${user.username}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        if (response.ok) {
          alert("User information updated successfully");
          window.location.reload();
        } else {
          alert("User information update failed");
        }
      }) .catch((error) => {
        console.log(error)
      });
    };

    const handleDeregisterUser = (event) => {
        event.preventDefault();

        const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
        };

        fetch(`${process.env.REACT_APP_API_URL}/users/.username`, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
        }).then((response) => {
        if (response.ok) {
            alert("User successfully deleted");
            window.location.reload();
        } else {
            alert("User account deletion failed");
        }
        }) .catch((error) => {
        console.log(error)
        });
    };

    const handleAddFavoriteMovie = (event) => {
        event.preventDefault();

        const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
        };

        fetch(`${process.env.REACT_APP_API_URL}/users/${user.username}/movies/${movieId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
//        setFavoriteMovies([...favoriteMovies, movieId]);
        }).then((response) => {
        if (response.ok) {
            alert("Movie successfully added to favorites");
            window.location.reload();
        } else {
            alert("Error adding favorite movie");
        }
        }) .catch((error) => {
        console.log(error)
        });
    };

    const handleRemoveFavoriteMovie = (event) => {
        event.preventDefault();

        const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
        };

        fetch(`${process.env.REACT_APP_API_URL}/users/${user.username}/movies/${movieId}`, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
//        setFavoriteMovies(favoriteMovies.filter(id => id !== movieId));
        }).then((response) => {
        if (response.ok) {
            alert("Movie successfully deleted from favorites");
            window.location.reload();
        } else {
            alert("Error removing favorite movie");
        }
        }) .catch((error) => {
        console.log(error)
        });
    };

/*    // Fetch user's favorite movies on component mount
    useEffect(() => {
        const fetchFavoriteMovies = async () => {
        try {
            // Fetch user's favorite movies from backend (Huriko)
            // Example implementation:
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.username}/movies`);
            const data = await response.json();
            setFavoriteMovies(data);
        } catch (error) {
            console.error('Error fetching favorite movies:', error);
        }
        };
        fetchFavoriteMovies();
    }, [user.username]);*/

  return (
    <Container>
        <Row>
            <Col md={5}>
                <div>
                <h3>User Profile</h3>
                <Form onSubmit={handleUpdateUser}>
                    <Form.Group controlId="signUpFormUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="3"
                        />
                    </Form.Group>

                    <Form.Group controlId="signUpFormPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </Form.Group>

                    <Form.Group controlId="signUpFormEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </Form.Group>

                    <Form.Group controlId="signUpFormBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required
                        />
                    </Form.Group>
                    <Button className="mt-3" variant="primary" type="submit">
                        Update User Info
                    </Button>
                </Form>
                </div>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
                <div>
                <h3>Favorite Movies</h3>
                <p></p>
                <span>Place marker</span>
                </div>
            </Col>
            <Link to="/">Back to Home</Link>
        </Row>
        <Row className="justify-content-md-center">
            <Col md={5}>
            <h3>Delete your Profile</h3>
                <Form onSubmit={handleDeregisterUser}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">
                    Deregister
                </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  );
};
