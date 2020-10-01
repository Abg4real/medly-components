import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning183LineIconSvg from '../../assets/GSDD/Warning_183_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning183LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning183LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning183LineIcon.Style = SvgIcon;
Warning183LineIcon.displayName = 'Warning183LineIcon';

export default Warning183LineIcon
