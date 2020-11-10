import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import {useStylesSignIn} from '../../pages/SignIn'


// interface IModalProps {
//     title: string
//     classes?: ReturnType<typeof useStylesSignIn>
//     visible?: boolean
//     onClose: () => void
//     children: React.ReactNode
// }


type ModalPropsType = {
    title: string
    classes?: ReturnType<typeof useStylesSignIn>
    visible?: boolean
    onClose: () => void
    children: React.ReactNode
}


export const ModalBlock: React.FC<ModalPropsType> = (
    {title, visible = false, onClose, children}
    ): React.ReactElement | null => {

    if (!visible) return null

    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby={'form-dialog'}>
            <DialogTitle id={'form-dialog-title'}>
                <IconButton onClick={onClose} color={'secondary'} aria-label={'close'}>
                    <CloseIcon style={{fontSize: 26}} color={'secondary'}/>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}