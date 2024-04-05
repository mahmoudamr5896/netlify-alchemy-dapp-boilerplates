import styles from "../styles/InstructionsComponent.module.css";
// import image from '../images';
import Router, { useRouter } from "next/router";
// import { Row, Col } from 'react-bootstrap'; // Import Row and Col components from Bootstrap
import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";

export default function InstructionsComponent() {
	const router = useRouter();












	return (
		<div className={styles.container}>
		<header className={styles.header_container}>
				<div className={styles.content} style={{float:'left'}}>
				<h1>
				<span>Hey There</span><br />
				I'm Mahmoud Amr Hassan<br />				<span>Full Stack Web Developer</span>

				</h1>
				<h6 style={{width:'800px',fontSize:'30px' }}>
				Software engineer graduated from Information Technology Institute (ITI),
				Certified by Google as a Data Analyst, Proficient in JavaScript, ES6,
					jQuery, React, Python, Django, Flask, SQL, PostgreSQL, MySQL, MongoDB,
					HTML5, CSS3, Bootstrap, Git, GitHub, Bash scripting, Apache, Odoo, Docker, 
					C, C++, PHP, WordPress.
				</h6 >
				<button style={{ width: '100px', height: '40px',marginLeft:'400px' }}
				onClick={(e) => {
					e.preventDefault();
					window.location.href = '/files/mahmoudamrhassan_resume.pdf';
				}}>My Resume</button>
				</div>
					<div className={styles.image_container}>
						{/* Uncomment this line if you want to display an image */}
						{/* <img src='https://avatars.githubusercontent.com/u/100859586?s=400&u=4a1d93ee85446c8c51f02d7173db6219c562b2fd&v=4' width={"800px"} height={"800px"} alt="Profile" /> */}
					</div>
		</header>
 
			{/* Projects */}
              <h1 style={{textAlign:'right'}}>My Projects</h1>
			  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											marginTop:'20px',
											border: '0',
	           background:' #d0bb57'}}></hr>	
			  <section className={styles.cardSection}>
			  {/* <h2 className={styles.sectionTitle}>Card Section</h2> */}
             <div className={styles.cardContainer}>
			  <div className={styles.card}>
						<img
						src='/images/download.png' 
						// src='https://private-user-images.githubusercontent.com/100859586/318974022-69b02bec-d87f-483c-8d8e-5db9f2cf8a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIxOTE2MjYsIm5iZiI6MTcxMjE5MTMyNiwicGF0aCI6Ii8xMDA4NTk1ODYvMzE4OTc0MDIyLTY5YjAyYmVjLWQ4N2YtNDgzYy04ZDhlLTVkYjlmMmNmOGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQwNFQwMDQyMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWYxNjNlYWMyZGE5NmFlOTQ4NGI5ZmI0NjJhMmE5MThiNjY3NzA4N2M1MDEwYjFiMzg4NDdiMGI5NTc4MmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.26VSA008jOKVSsBO7YjMjqcZVN9BpsE5BYx3lT2rJ6s'
					    alt="Placeholder"
						className={styles.cardImage}
						  />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Todo  App</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							
							<p className={styles.cardTitle}>Teck Stack</p>
							  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>Python</span>
                              <span className={styles.tech}>Django</span>
                              <span className={styles.tech}>HTML</span>
                              <span className={styles.tech}>Css</span>
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/Todo-List" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
						src='/images/image.png'
						alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>E-Commece App</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							
							<p className={styles.cardTitle}>Teck Stack</p>
							  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>React</span>
                              <span className={styles.tech}>Retoolapi</span>
                              <span className={styles.tech}>HTML</span>
                              <span className={styles.tech}>Css</span>
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a 
								href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/Todo-List" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
						src='/images/download.jpeg'
						alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Movies App</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							
							<p className={styles.cardTitle}>Teck Stack</p>
							  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>React</span>
                              <span className={styles.tech}>Redux</span>
                              <span className={styles.tech}>HTML</span>
                              <span className={styles.tech}>Css</span>
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a 
								href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/day3" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
						src='/images/download (1).jpeg'
						alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}> Project Database Engine in BASH </h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							
							<p className={styles.cardTitle}>Teck Stack</p>
							  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>React</span>
                              <span className={styles.tech}>Retoolapi</span>
                              <span className={styles.tech}>HTML</span>
                              <span className={styles.tech}>Css</span>
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/Todo-List" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
						src='/images/mashroh.jpg'
						alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Mshroh Courses Online</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							
							<p className={styles.cardTitle}>Teck Stack</p>
							  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>Wordpress</span>
                              <span className={styles.tech}>Examb</span>
                              <span className={styles.tech}>Php</span>
                              {/* <span className={styles.tech}>Css</span> */}
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/Todo-List" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
						src='/images/clothing.jpg'
						alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Application clothing Shop clothes</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							
							<p className={styles.cardTitle}>Teck Stack</p>
							  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>Javascript</span>
                              {/* <span className={styles.tech}>Retoolapi</span> */}
                              <span className={styles.tech}>HTML</span>
                              <span className={styles.tech}>Css</span>
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/Todo-List" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
						src='/images/image copy.png'
						alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>E-commerce Web Application</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							
							<p className={styles.cardTitle}>Teck Stack</p>
							  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>JavaScript</span>
                              {/* <span className={styles.tech}>Retoolapi</span> */}
                              <span className={styles.tech}>HTML</span>
                              <span className={styles.tech}>Css</span>
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/Todo-List" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
						src='/images/image copy 2.png'
						alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>App Mr./Health</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							
							<p className={styles.cardTitle}>Teck Stack</p>
							  <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>React</span>
                              <span className={styles.tech}>Django</span>
                              <span className={styles.tech}>HTML</span>
                              {/* <span className={styles.tech}>Css</span> */}
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/Todo-List" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
              </div>
			  </section>
			{/* Skills */}
			  <section id="skills">
					<div class="section-divider"></div>
					<h1 class="section-title">Skills</h1>
					<p class="section-text">
						I have extensive experience working with a variety of technologies as a developer. I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.
					</p>

						<div  style={{width:'100%'}} class="skills-list">
							<span style={{width:'200px'}} class="skill-item">
							<div class="skill-icon"><img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="React.js" width="70" /></div>
							<div class="skill-details">
								<h4 class="skill-title">React.js</h4>
								<div class="skill-description">Android Apps, ROMs, & Kernels</div>
							</div>
							</span>
							<span style={{width:'200px'}} class="skill-item">
							<div class="skill-icon"><img src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="React.js" width="70" /></div>
							<div class="skill-details">
								<h4 class="skill-title">React.js</h4>
								<div class="skill-description">Web Development</div>
							</div>
							</span>
						</div>
                       <div class="section-divider color-alt"></div>
              </section>



			

			<div className={styles.footer}>
				
			</div>
		</div>
	);
}
{/* <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="Alchemy Supercharged"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/alchemyplatform/create-web3-dapp"
							target={"_blank"}
						>
							Leave a star on Github
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/AlchemyPlatform"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div> */}

{/* <div className={styles.section}>
            <div key='' className={styles.projectBlock}>
              <img width={"200px"} height={"200px"}
			   src='https://private-user-images.githubusercontent.com/100859586/318974022-69b02bec-d87f-483c-8d8e-5db9f2cf8a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIxOTE2MjYsIm5iZiI6MTcxMjE5MTMyNiwicGF0aCI6Ii8xMDA4NTk1ODYvMzE4OTc0MDIyLTY5YjAyYmVjLWQ4N2YtNDgzYy04ZDhlLTVkYjlmMmNmOGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQwNFQwMDQyMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWYxNjNlYWMyZGE5NmFlOTQ4NGI5ZmI0NjJhMmE5MThiNjY3NzA4N2M1MDEwYjFiMzg4NDdiMGI5NTc4MmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.26VSA008jOKVSsBO7YjMjqcZVN9BpsE5BYx3lT2rJ6s' alt='' />
              <h3>project.title</h3>
              <p></p>
            </div>
            <div key='' className={styles.projectBlock}>
              <img width={"200px"} height={"200px"}
			   src='https://private-user-images.githubusercontent.com/100859586/318974022-69b02bec-d87f-483c-8d8e-5db9f2cf8a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIxOTE2MjYsIm5iZiI6MTcxMjE5MTMyNiwicGF0aCI6Ii8xMDA4NTk1ODYvMzE4OTc0MDIyLTY5YjAyYmVjLWQ4N2YtNDgzYy04ZDhlLTVkYjlmMmNmOGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQwNFQwMDQyMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWYxNjNlYWMyZGE5NmFlOTQ4NGI5ZmI0NjJhMmE5MThiNjY3NzA4N2M1MDEwYjFiMzg4NDdiMGI5NTc4MmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.26VSA008jOKVSsBO7YjMjqcZVN9BpsE5BYx3lT2rJ6s' alt='' />
              <h3>project.title</h3>
              <p></p>
            </div>
            <div key='' className={styles.projectBlock}>
              <img width={"200px"} height={"200px"}
			   src='https://private-user-images.githubusercontent.com/100859586/318974022-69b02bec-d87f-483c-8d8e-5db9f2cf8a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIxOTE2MjYsIm5iZiI6MTcxMjE5MTMyNiwicGF0aCI6Ii8xMDA4NTk1ODYvMzE4OTc0MDIyLTY5YjAyYmVjLWQ4N2YtNDgzYy04ZDhlLTVkYjlmMmNmOGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQwNFQwMDQyMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWYxNjNlYWMyZGE5NmFlOTQ4NGI5ZmI0NjJhMmE5MThiNjY3NzA4N2M1MDEwYjFiMzg4NDdiMGI5NTc4MmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.26VSA008jOKVSsBO7YjMjqcZVN9BpsE5BYx3lT2rJ6s' alt='' />
              <h3>Todo App</h3>
              <p></p>
            </div>
            <div key='' className={styles.projectBlock}>
              <img width={"200px"} height={"200px"}
			   src='https://private-user-images.githubusercontent.com/100859586/318974022-69b02bec-d87f-483c-8d8e-5db9f2cf8a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIxOTE2MjYsIm5iZiI6MTcxMjE5MTMyNiwicGF0aCI6Ii8xMDA4NTk1ODYvMzE4OTc0MDIyLTY5YjAyYmVjLWQ4N2YtNDgzYy04ZDhlLTVkYjlmMmNmOGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQwNFQwMDQyMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWYxNjNlYWMyZGE5NmFlOTQ4NGI5ZmI0NjJhMmE5MThiNjY3NzA4N2M1MDEwYjFiMzg4NDdiMGI5NTc4MmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.26VSA008jOKVSsBO7YjMjqcZVN9BpsE5BYx3lT2rJ6s' alt='' />
              <h3>project.title</h3>
              <p></p>
            </div>
               </div> */}	  {/* <div className={styles.card}>
						<img 
								src='https://private-user-images.githubusercontent.com/100859586/318974022-69b02bec-d87f-483c-8d8e-5db9f2cf8a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIxOTE2MjYsIm5iZiI6MTcxMjE5MTMyNiwicGF0aCI6Ii8xMDA4NTk1ODYvMzE4OTc0MDIyLTY5YjAyYmVjLWQ4N2YtNDgzYy04ZDhlLTVkYjlmMmNmOGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQwNFQwMDQyMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWYxNjNlYWMyZGE5NmFlOTQ4NGI5ZmI0NjJhMmE5MThiNjY3NzA4N2M1MDEwYjFiMzg4NDdiMGI5NTc4MmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.26VSA008jOKVSsBO7YjMjqcZVN9BpsE5BYx3lT2rJ6s' 			   alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Card Title</h2>
							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							<hr></hr>
							<p>Teck Stack</p>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
								src='https://private-user-images.githubusercontent.com/100859586/318974022-69b02bec-d87f-483c-8d8e-5db9f2cf8a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIxOTE2MjYsIm5iZiI6MTcxMjE5MTMyNiwicGF0aCI6Ii8xMDA4NTk1ODYvMzE4OTc0MDIyLTY5YjAyYmVjLWQ4N2YtNDgzYy04ZDhlLTVkYjlmMmNmOGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQwNFQwMDQyMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWYxNjNlYWMyZGE5NmFlOTQ4NGI5ZmI0NjJhMmE5MThiNjY3NzA4N2M1MDEwYjFiMzg4NDdiMGI5NTc4MmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.26VSA008jOKVSsBO7YjMjqcZVN9BpsE5BYx3lT2rJ6s' 			   alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Card Title</h2>
							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							<hr></hr>
							<p>Teck Stack</p>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
								src='https://private-user-images.githubusercontent.com/100859586/318974022-69b02bec-d87f-483c-8d8e-5db9f2cf8a6a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIxOTE2MjYsIm5iZiI6MTcxMjE5MTMyNiwicGF0aCI6Ii8xMDA4NTk1ODYvMzE4OTc0MDIyLTY5YjAyYmVjLWQ4N2YtNDgzYy04ZDhlLTVkYjlmMmNmOGE2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQwNFQwMDQyMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWYxNjNlYWMyZGE5NmFlOTQ4NGI5ZmI0NjJhMmE5MThiNjY3NzA4N2M1MDEwYjFiMzg4NDdiMGI5NTc4MmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.26VSA008jOKVSsBO7YjMjqcZVN9BpsE5BYx3lT2rJ6s' 			   alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Card Title</h2>
							<p className={styles.cardText}>This is a simple card component created using CSS.</p>
							<hr></hr>
							<p>Teck Stack</p>

						</div>
              </div> */}{/* <div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://createweb3dapp.alchemy.com/#components"}
				>
					<div className={styles.button}>
						<img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} />
						<p>Add Components</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://createweb3dapp.alchemy.com/#templates"}
				>
					<div className={styles.button}>
						<img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} />
						<p>Explore Templates</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://docs.alchemy.com/docs/create-web3-dapp"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Visit Docs</p>
					</div>
				</a>
			</div> */}