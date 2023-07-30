/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import NextLink from "next/link";

const Link = ({ href, children, ...props }) => {
  console.log(children);
  return (
    <NextLink href={href || ""} passHref legacyBehavior>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
