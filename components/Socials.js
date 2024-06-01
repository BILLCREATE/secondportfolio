import Link from "next/link";
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleFill,
  RiPinterestLine,
  RiDribbbleLine,
  RiBehanceLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/muhammad-bilal-b488982a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100089565180570&mibextid=ZbWKwL"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.instagram.com/_extics?igsh=MWk1emg1cjQ0aG15Ng==/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://dribbble.com/_bilalidrees786"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>

      <Link
        href={"https://www.behance.net/bilalidrees3"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>

      <Link
        href={"https://pin.it/6G8zGut7y"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

const SocialsContainer = () => {
  return (
    <div className="-py-4">
      {/* You can adjust the padding value (-py-3) as needed */}
      <Socials />
    </div>
  );
};

export default SocialsContainer;
