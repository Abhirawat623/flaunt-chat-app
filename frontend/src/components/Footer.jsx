export const Footer=()=>{

    return(
        <footer className=" p-2 flex flex-col items-center w-full absolute bottom-2">
        <p>Made by Abhishek Rawat</p>
        <div className="flex gap-x-2 align-center ">
          <a
            href="https://github.com/Abhirawat623"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://therightfit.netlify.app/assets/github-logo.png"
              alt="GitHub"
              className="h-10 w-10"
            />
          </a>
          <a
            href="https://twitter.com/Abhishekrwt38"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://therightfit.netlify.app/assets/twitter.png"
              alt="Twitter"
              className="h-10 w-10"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-rawat-598151240/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://therightfit.netlify.app/assets/linkedin.png"
              alt="LinkedIn"
              className="h-10 w-10"
            />
          </a>
        </div>
      </footer>
    )
}