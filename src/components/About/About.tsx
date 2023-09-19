import { about, fetchProfileData } from "../../constants/portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../../Styles/About.css";

export default function About() {
  const { name, role, description, resume, social } = about;

  // เรียกใช้ฟังก์ชัน fetchProfileData
  // fetchProfileData()
  //     .then((profile) => {
  //         // ทำสิ่งที่คุณต้องการกับข้อมูล profile ที่ได้รับ เช่น แสดงผลในแอปพลิเคชันหรือประมวลผลต่อไป
  //         console.log('ข้อมูล Profile:', profile[0]);
  //         const { first_name } = profile[0];
  //     })
  //     .catch((error) => {
  //         console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Profile:', error);
  //     });
  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I'm <span className="about__name">{name}.</span>
        </h1>
      )}
      {role && <h2 className="about__role">{role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume} target="_blank">
            <span className="btn btn--outline">Resume</span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
