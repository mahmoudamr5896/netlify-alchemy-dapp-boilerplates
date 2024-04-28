import styles from "../styles/InstructionsComponent.module.css";
// import image from '../images';
import Router, { useRouter } from "next/router";
// import { Row, Col } from 'react-bootstrap'; // Import Row and Col components from Bootstrap
import {SiPostgresql,SiAngular,SiNodeDotJs, SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws ,SiCplusplus, SiC, SiJava  } from "react-icons/si";
// import { , SiNodeDotJs } from "react-icons/si";
import { FaReact, FaPython, FaDatabase, FaWordpress, FaDocker,FaJava, FaCSharp } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { DiFlask } from "react-icons/di";
import { FaHtml5, FaPhp, FaJs, FaCode } from "react-icons/fa"; // Import icons

export default function InstructionsComponent() {
	const router = useRouter();


	return (
		<div className={styles.container}>
		<header className={styles.cardSection}>
				<div className={styles.content} style={{float:'left'}}>
				<h1>
				<span style={{background: 'linear-gradient(140deg, rgba(54,190,255,1) 0%, rgba(115,63,241,1) 100%)', backgroundClip: 'text', color: 'transparent'}}>Hey There</span>
				<br />
				<br />
				{/* <span>Full Stack Web Developer</span> */}
				</h1>
				<p className="responsive-paragraph">
    I'm Mahmoud Amr Hassan,software engineer graduated from the Information Technology Institute (ITI), certified by Google as a Data Analyst. I'm proficient in JavaScript, ES6, jQuery, React, Python, Django, Flask, SQL, PostgreSQL, MySQL, MongoDB, HTML5, CSS3, Bootstrap, Git, GitHub, Bash scripting, Apache, Odoo, Docker, C, C++, PHP, and WordPress.
     </p><br></br>
				<button style={{ width: '100px', height: '40px'}}
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
							<h2 className={styles.cardTitle}>Web Application E-Commece</h2>
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
							<h2 className={styles.cardTitle}>Web Application Movies </h2>
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
							<h2 className={styles.cardTitle}>Web Application Mshroh Courses Online</h2>
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
							<h2 className={styles.cardTitle}>Web Application clothing Shop clothes</h2>
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
							<h2 className={styles.cardTitle}>Web Application E-commerce </h2>
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
							<h2 className={styles.cardTitle}>Web Application Mr./Health</h2>
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
			  <div className={styles.card}>
						<img 
						src='/images/bookstor.png'
						alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Web Application Book store</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
											<p className={styles.cardText}>
												This is a simple project  created using Nodejs .
												</p>
							                   <p className={styles.cardTitle}>Teck Stack</p>
							                   <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>Node js</span>
                              <span className={styles.tech}>Css</span>
                              <span className={styles.tech}>HTML</span>
                              {/* <span className={styles.tech}>Css</span> */}
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a 
								href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/project-book-store" target="_blank">
									Source Code
								</a>
								</span>			
							  </div>

							  </div>

						</div>
              </div>
			  <div className={styles.card}>
						<img 
						src='/images/images_q.png'	
											alt="Placeholder" className={styles.cardImage} />
						<div className={styles.cardContent}>
							<h2 className={styles.cardTitle}>Web Application E Commerce</h2>
							<hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
											<p className={styles.cardText}>
												This is a simple project  created using Angular  .
												</p>
							                   <p className={styles.cardTitle}>Teck Stack</p>
							                   <hr style={{marginBottom:'10px', width: '50px',
											height: '3px',
											margin:' 8px auto',
											border: '0',
											background:' #d0bb57'}}></hr>
							  <div>
						      <span className={styles.tech}>Angular</span>
                              <span className={styles.tech}>Json Server</span>
                              <span className={styles.tech}>HTML</span>
                              {/* <span className={styles.tech}>Css</span> */}
							  <div style={{textAlign:'center',marginTop:'20px'}}>
					          <span className={styles.Info}>
								<a 
								href="https://www.linkedin.com/feed/update/urn:li:activity:7181048190861774848/" target="_blank">
																	See Detail

								</a>
								</span>
                              <span className={styles.Info}>
								<a href="https://github.com/mahmoudamr5896/Angulat-project-e-commerce" target="_blank">
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
			  <section id="skills" className={styles.cardSection}>
					<h1 class="section-title">Skills</h1>
						<p className="responsive-paragraph">
							I have extensive experience working with a variety of technologies as a developer. I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.
						</p>
						<div className={styles.iconContainer}>
							<div className={styles.skillItem}>
				<FaHtml5 className={styles.icon} />
				<div className={styles.skill}>
					<h4>HTML</h4>
					{/* <div className={styles.progress} style={{ width: '80%' }}></div> */}
				</div>
							</div>
							<div className={styles.skillItem}>
								<FaPhp className={styles.icon} />
								<div className={styles.skill}>
									<h4>PHP</h4>
									{/* <div className={styles.progress} style={{ width: '60%' }}></div> */}
								</div>
							</div>
							<div className={styles.skillItem}>
								<FaJs className={styles.icon} />
								<div className={styles.skill}>
									<h4>JavaScript</h4>
									{/* <div className={styles.progress} style={{ width: '60%' }}></div> */}
								</div>
							</div>
							<div className={styles.skillItem}>
								<FaCode className={styles.icon} />
								<div className={styles.skill}>
									<h4>BashScript</h4>
									{/* <div className={styles.progress} style={{ width: '60%' }}></div> */}
								</div>
							</div>
							<div className={styles.skillItem}>
				<SiCplusplus className={styles.icon} />
				<div className={styles.skill}>
					<h4>C++</h4>
					{/* <div className={styles.progress} style={{ width: '60%' }}></div> */}
				</div>
			</div>
			<div className={styles.skillItem}>
				<SiC className={styles.icon} />
				<div className={styles.skill}>
					<h4>Programming</h4>
					{/* <div className={styles.progress} style={{ width: '80%' }}></div> */}
				</div>
			</div>
			<div className={styles.skillItem}>
				<FaJava className={styles.icon} />
				<div className={styles.skill}>
					<h4>Java</h4>
					{/* <div className={styles.progress} style={{ width: '60%' }}></div> */}
				</div>
			</div>
			{/* <div className={styles.skillItem}>
				<FaCSharp className={styles.icon} />
				<div className={styles.skill}>
					<p>C#</p>
					<div className={styles.progress} style={{ width: '60%' }}></div>
				</div>
			</div> */}
						</div>
						<div className={styles.iconContainer}>
			<div className={styles.iconItem}>
				<FaReact className={styles.largeIcon} />
				<span>React</span>
				{/* <p>React Devoloper</p> */}
			</div>
			<div className={styles.iconItem}>
				<SiDjango className={styles.largeIcon} />
				<span>Django</span>
				{/* <p>React Devoloper</p> */}

			</div>
			<div className={styles.iconItem}>
				<FaPython className={styles.largeIcon} />
				<span>Python</span>
				{/* <p>React Devoloper</p> */}

			</div>
			<div className={styles.iconItem}>
				<SiPostgresql className={styles.largeIcon} />
				<span>PostgreSQL</span>
				{/* <p>React Devoloper</p> */}

			</div>
		
			<div className={styles.iconItem}>
				<FaWordpress className={styles.largeIcon} />
				<span>WordPress</span>
				{/* <p>React Devoloper</p> */}

			</div>

			<div className={styles.iconItem}>
				<FaDocker className={styles.largeIcon} />
				<span>Docker</span>
				{/* <p>React Devoloper</p> */}

			</div>
			<div className={styles.iconItem}>
				<SiAngular className={styles.largeIcon} />
				<span>Angular</span>
				{/* <p>React Devoloper</p> */}

			</div>

						</div> 
              </section>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
			<div className={styles.footer}>
				<a href="/">Mahmoud Amr Hassan</a>
			</div>
		</div>
	);
}
   {/* <div className={styles.iconItem}>
        <DiNextjs className={styles.largeIcon} />
        <span>Next.js</span>
    </div>
    <div className={styles.iconItem}>
        <SiNodeDotJs className={styles.largeIcon} />
        <span>Node.js</span>
    </div> */}
	   {/* <div className={styles.iconItem}>
        <DiFlask className={styles.largeIcon} />
        <span>Flask</span>
    </div> */}
     {/*<div className={styles.iconItem}>
        <DiOdoo className={styles.largeIcon} />
        <span>Odoo</span>
    </div> */}

{/* <p>WordPress</p>
<div className={styles.container}>
	<FontAwesomeIcon icon={faWordpress} className={styles.icon} />
	<div className={styles.skill} style={{ width: '60%' }}>60%</div>
</div>

<p>Python (Django)</p>
<div className={styles.container}>
	<FontAwesomeIcon icon={faPython} className={styles.icon} />
	<div className={styles.skill} style={{ width: '70%' }}>70%</div>
</div> */}














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