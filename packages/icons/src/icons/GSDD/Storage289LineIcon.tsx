import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage289LineIconSvg from '../../assets/GSDD/Storage_289_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage289LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage289LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage289LineIcon.Style = SvgIcon;
Storage289LineIcon.displayName = 'Storage289LineIcon';

export default Storage289LineIcon
