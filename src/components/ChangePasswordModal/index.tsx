import { FormData, PasswordChangeModalProps } from './interface'
import { IoMdClose } from 'react-icons/io'
import {
  ModalBackdrop,
  ModalContainer,
  Button,
  Input,
  ModalTitle,
  Label,
  StyledCloseButton,
  ContainerCloseButton,
} from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationChangePassword } from './schema'

export const PasswordChangeModal = ({
  isOpen,
  onClose,
  onSubmit,
}: PasswordChangeModalProps) => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationChangePassword),
  })

  const onSubmitForm: SubmitHandler<FormData> = (data) => {
    onSubmit(data.oldPassword, data.newPassword, data.confirmNewPassword)
  }

  if (!isOpen) return null

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ContainerCloseButton>
          <StyledCloseButton onClick={onClose}>
            <IoMdClose />
          </StyledCloseButton>
        </ContainerCloseButton>
        <ModalTitle>Alterar Senha</ModalTitle>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Label htmlFor="oldPassword">Senha Atual:</Label>
          <Input
            type="password"
            placeholder="Senha Atual"
            {...register('oldPassword', { required: true })}
          />
          {/* {errors.oldPassword && <LabelError>{errors.oldPassword.message}</LabelError>} */}

          <Label htmlFor="newPassword">Nova Senha:</Label>
          <Input
            type="password"
            placeholder="Nova Senha"
            {...register('newPassword', { required: true })}
          />
          {/* {errors.newPassword && <LabelError>{errors.newPassword.message}</LabelError>} */}

          <Label htmlFor="confirmNewPassword">Confirmação:</Label>
          <Input
            type="password"
            placeholder="Confirme a Nova Senha"
            {...register('confirmNewPassword', { required: true })}
          />
          {/* {errors.confirmNewPassword && <LabelError>{errors.confirmNewPassword.message}</LabelError>} */}

          <Button type="submit">Alterar Senha</Button>
        </form>
      </ModalContainer>
    </ModalBackdrop>
  )
}
