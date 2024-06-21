// propTypes 사용하기 위해 터미널에서 npm i prop-types로 설치 후 임포트.
import PropTypes from "prop-types";
// 각 js파일에서 module.css 파일을 임포트 (파일명은 반드시 ~~.module.css 이어야 함)
import styles from "./Button.module.css"

function Button({ text }){

    return (
        <button className={styles.btn}>{text}</button>
        // create-react-app의 힘! 이런 문법으로 각 버튼마다 다른 css를 줄 수 있다.
    )
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
}

export default Button;
// export default Button;은 function Button()이라는 컴포넌트를 현재 파일(Button.js)의 기본 내보내기로 지정합니다.
// 모듈을 다른 파일에서 사용하려면 export 문을 사용하여 내보내야 합니다. 안 쓰면 다른 파일에서 임포트 할 수 없습니다.
// 다른 파일에서 import Button from "./Button";를 통해 이 App 컴포넌트를 가져와 사용할 수 있습니다.