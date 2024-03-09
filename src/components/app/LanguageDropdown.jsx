import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CircleFlag } from "react-circle-flags";

function LanguageDropdown() {
    const { i18n } = useTranslation()
    const languages = {
        bg: "Български",
        en: "English",
    }
    const title = languages[i18n.language] || ''

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const getFlag = (isoCode) => {
        return  isoCode === 'en' ? 'uk' : isoCode
    }
    const navDropdownItems = () => {
        return Object.entries(languages).map(([key, value]) => {
            return <NavDropdown.Item
                key={key}
                onClick={()=> changeLanguage(key)}
                className={"d-flex align-items-center"}
            >
                <CircleFlag countryCode={getFlag(key)}
                            height={16}/>
                <span className={"ms-2"}>{value}</span>
            </NavDropdown.Item>
        })
    }

    return (
        <NavDropdown
            id="language-switch"
            title={<div className={"d-flex align-items-center"}>
                        <CircleFlag countryCode={getFlag(i18n.language)}
                                    height={16}/>
                        <span className={"ms-2"}>{title}</span>
                    </div>}>
            {navDropdownItems()}
        </NavDropdown>
    )
}

export default LanguageDropdown