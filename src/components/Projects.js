import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ecom_img from "../assets/img/Project/E-com.png";
import emotion_img from "../assets/img/Project/Emotion_detector.png"
import medical_img from "../assets/img/Project/medical_chatbot.png"
import dog_cat_img from "../assets/img/Project/dog_cat_classifier.png"
import lead_img from "../assets/img/Project/lead_system.png"
import honey_img from "../assets/img/Project/honeypot.png"

export const Projects = () => {

  const projects = [
    {
      title: "Codemy",
      description: "Full Stack MERN Project",
      imgUrl: ecom_img,
      githubUrl: "https://github.com/manasdekivadia/ecom-site",
    },
    {
      title: "Dr. Buddy",
      description: "GenAI Medical Chat Bot",
      imgUrl: medical_img,
      githubUrl: "https://github.com/username/port-scanner", 
    },
    {
      title: "Moodlyzer",
      description: "Modeled to detect Emotion with live Webcam",
      imgUrl: emotion_img,
      githubUrl: "https://github.com/manasdekivadia/medical-chatbot",
    },
    {
      title: "PetScan",
      description: "CNN Model to classify dog vs cat",
      imgUrl: dog_cat_img,
      githubUrl: "https://github.com/manasdekivadia/dog-vs-cats-classifier", // Add your GitHub URL here
    },
    {
      title: "Lead Scoring System",
      description: "FastAPI Implemented AI Model",
      imgUrl: lead_img,
      githubUrl: "https://github.com/manasdekivadia/lead-scoring-system", // Add your GitHub URL here
    },
    {
      title: "HoneyPot",
      description: "SSH & HTTP Services",
      imgUrl: honey_img,
      githubUrl: "https://github.com/manasdekivadia/Honeypot", // Add your GitHub URL here
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I’ve worked on — from real-world applications to personal experiments. Each one showcases my skills in design, development, and problem-solving.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
