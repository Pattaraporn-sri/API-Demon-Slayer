import React from "react";
import styles from "./StyledText.module.css";

interface StyledTextProps {
  text: string; // ข้อความที่ต้องการแสดง
}

const StyledText: React.FC<StyledTextProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      {/* เงา */}
      <div className={styles.shadow}>
        {text.split(" ").map((word, index) => (
          <span key={index}>
            {word}
            <br />
          </span>
        ))}
      </div>
      {/* ข้อความ */}
      <div className={styles.text}>
        {text.split(" ").map((word, index) => (
          <span key={index}>
            {word}
            <br />
          </span>
        ))}
      </div>
    </div>

  );
};

export default StyledText;
