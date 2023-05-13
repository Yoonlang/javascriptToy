import { Helmet } from "react-helmet";

interface CustomHelmetProps {
  page: string;
  data?: {
    name: string;
    title: string;
    email: string;
    role: string;
  };
}

const CustomHelmet: React.FC<CustomHelmetProps> = ({ page, data }) => {
  if (page === "main")
    return (
      <Helmet>
        <title>Main</title>
        <meta name="description" content="This is main page." />
        <meta name="keywords" content="javascript, react, main page" />
        <link rel="shortcut icon" href={`${process.env.PUBLIC_URL}/1.ico`} />
      </Helmet>
    );

  if (page === "user") {
    const { name, title, role } = data;
    return (
      <Helmet>
        <title>User</title>
        <meta name="description" content="This is user page." />
        <meta name="keywords" content={`${name}, ${title}, ${role}`} />
        <link rel="shortcut icon" href={`${process.env.PUBLIC_URL}/2.ico`} />
      </Helmet>
    );
  }
};

export default CustomHelmet;
