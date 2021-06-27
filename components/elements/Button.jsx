import PropTypes from 'prop-types';
import styles from '../../styles/CnButton.module.scss';

const TYPES = {
    primary: 'cnBtnPrimary',
}
const SIZE = {
    medium: 'cnBtnMedium',
}
const CnButton = ({
    children,
    type,
    size,
    disabled,
}) => {
    const btnType = TYPES[type] ?? TYPES['primary'];
    const btnSize = SIZE[size] ?? SIZE['medium'];
    debugger

    return (
        <button disabled={disabled} className={`${styles.cnBtn} ${styles[btnType]} ${styles[btnSize]}`}>
            {children}
        </button >
    )
}

CnButton.defaultProps = {
    disabled: false
}

CnButton.propTypes = {
    disabled: PropTypes.bool
}
export default CnButton;