import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { Props } from './types';

const getSearchBoxSize = ({ theme, searchBoxSize }: Props) => theme.searchBox.sizes[searchBoxSize].height;

const activeOptionStyle = () => {
    return css`
        border: solid 0.1rem ${({ theme }) => theme.searchBox.active.borderColor};
        border-top: 0;
        box-shadow: ${({ theme }) => theme.searchBox.options.boxShadow};
    `;
};

const nonActiveOptionStyle = () => {
    return css`
        border: none;
        box-shadow: none;
    `;
};

const activeSearchIcon = () => {
    return css`
        path {
            fill: ${({ theme }) => theme.searchBox.active.iconColor};
        }

        &:hover {
            background-color: ${({ theme }) => theme.searchBox.active.iconBg};
        }
    `;
};

const nonActiveSearchIcon = () => {
    return css`
        &:hover {
            background-color: ${({ theme }) => theme.searchBox.default.iconBg};
        }
    `;
};

const activeSearchBoxStyle = () => {
    return css`
        /* border-radius: 2rem 2rem 0 0; */
        position: absolute;
        z-index: 10000;

        /* border: solid 0.1rem ${({ theme }) => theme.searchBox.active.borderColor}; */
        border-bottom: 0;

        &:hover,
        &:focus {
            border-bottom: 0;
        }
    `;
};

const nonActiveSearchBoxStyle = () => {
    return css`
        /* border-radius: 2.5rem; */
        border: 0 none;

        /* border: 0.1rem solid ${({ theme }) => theme.searchBox.default.borderColor}; */

        &:hover {
            /* border: solid 0.1rem ${({ theme }) => theme.searchBox.hover.borderColor}; */

            /* box-shadow: ${({ theme }) => theme.searchBox.hover.boxShadow}; */
        }

        &:focus {
            /* border: solid 0.1rem ${({ theme }) => theme.searchBox.active.borderColor}; */

            /* box-shadow: ${({ theme }) => theme.searchBox.active.boxShadow}; */

            ${SvgIcon} {
                * {
                    fill: ${({ theme }) => theme.searchBox.active.borderColor};
                }
            }

            &::placeholder {
                color: ${({ theme }) => theme.searchBox.active.placeholderTextColor};
            }
        }
    `;
};

export const SearchBoxWrapper = styled('div')<Props & { isActive?: boolean; isIconActive?: boolean }>`
    position: relative;
    width: 25.6rem;
    border-radius: 2.5rem;
    border: 0.1rem solid red;
    display: flex;
    flex-direction: row;
    align-items: center;

    &::after {
        content: '';
        position: absolute;
        border-top: 1px solid ${({ theme }) => theme.searchBox.default.borderColor};
        width: 21.6rem;
        top: 4.7rem;
        left: 2rem;
        padding: 0;
        margin: 0;
        z-index: 10000;
        display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    }

    span {
        width: 48px;
        height: 48px;
        text-align: center;
    }

    ${SvgIcon} {
        cursor: pointer;
        font-size: 2rem;
        padding: 2px;
        margin-top: 1.1rem;

        * {
            fill: ${({ theme }) => theme.searchBox.default.iconColor};
        }
    }

    ${Options.Style} {
        top: 4.7rem;
        border-radius: 0 0 2rem 2rem;
        box-shadow: none;
        border: none;
        padding-bottom: ${({ isActive }) => (isActive ? '1.2rem' : '0')};
        ${({ isActive }) => (isActive ? activeOptionStyle : nonActiveOptionStyle)};

        li {
            padding: 0.4rem 2rem;
            font-size: 1.4rem;
        }
    }
`;

export const SearchBox = styled('input')<Props & { isActive?: boolean }>`
    height: ${getSearchBoxSize};
    box-sizing: border-box;
    background: transparent;
    flex-grow: 1;
    font-size: 1.4rem;
    padding-left: 2rem;
    outline: none;
    color: ${({ theme }) => theme.searchBox.default.textColor};

    &::placeholder {
        color: ${({ theme }) => theme.searchBox.default.placeholderTextColor};
    }

    ${({ isActive }) => (isActive ? activeSearchBoxStyle : nonActiveSearchBoxStyle)};
`;

export const CloseIconWrapper = styled('span')`
    /* position: absolute;
    right: 3.5rem; */
`;

export const SearchIconWrapper = styled('span')<Props & { isIconActive?: boolean }>`
    ${SvgIcon} {
        ${({ isIconActive }) => (isIconActive ? activeSearchIcon : nonActiveSearchIcon)};
    }
`;

SearchBox.defaultProps = {
    theme: defaultTheme
};
