import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Honey Pot",
      description: "Honeypot For SSH & HTML",
      imgUrl: projImg1,
      githubUrl: "https://github.com/username/honey-trap", // Add your GitHub URL here
    },
    {
      title: "Port Scanner",
      description: "Basic Nmap In Python",
      imgUrl: projImg2,
      githubUrl: "https://github.com/username/port-scanner", // Add your GitHub URL here
    },
    {
      title: "Dog/Cat Classifier",
      description: "CNN Model For Image Recognition",
      imgUrl: projImg3,
      githubUrl: "https://github.com/username/dog-cat-classifier", // Add your GitHub URL here
    },
    {
      title: "Hostel Management System",
      description: "MERN Stack Project",
      imgUrl: projImg1,
      githubUrl: "https://github.com/username/hostel-management-system", // Add your GitHub URL here
    },
    {
      title: "Lead Scoring System",
      description: "FastAPI Implemented AI Model",
      imgUrl: projImg2,
      githubUrl: "https://github.com/username/lead-scoring-system", // Add your GitHub URL here
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      githubUrl: "https://github.com/username/business-startup", // Add your GitHub URL here
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
