import { FormData, PasswordChangeModalProps } from './interface'
import { IoMdClose } from 'react-icons/io'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import {
  ModalBackdrop,
  ModalContainer,
  Button,
  Input,
  Label,
  StyledCloseButton,
  ContainerCloseButton,
  InputContainerForPassword,
  IconPassword,
} from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationChangePassword } from './schema'
import { useState } from 'react'

export const PasswordChangeModal = ({
  isOpen,
  onClose,
  onSubmit,
}: PasswordChangeModalProps) => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } = useForm<FormData>({
    resolver: yupResolver(validationChangePassword),
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const onSubmitForm: SubmitHandler<FormData> = (data) => {
    onSubmit(data.oldPassword, data.newPassword, data.confirmNewPassword)
  }

  if (!isOpen) return null

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ContainerCloseButton>
          <h2 className="titleChangePassword">Alterar Senha</h2>
          <StyledCloseButton onClick={onClose}>
            <IoMdClose />
          </StyledCloseButton>
        </ContainerCloseButton>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Label htmlFor="oldPassword">Senha Atual:</Label>
          <InputContainerForPassword>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Senha Atual"
              {...register('oldPassword', { required: true })}
            />
            <IconPassword onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </IconPassword>
          </InputContainerForPassword>
          {/* {errors.oldPassword && ( */}
          {/*  <StyledErrorMessage> */}
          {/*    {errors.oldPassword.message} */}
          {/*  </StyledErrorMessage> */}
          {/* )} */}

          <Label htmlFor="newPassword">Nova Senha:</Label>
          <InputContainerForPassword>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Nova Senha"
              {...register('newPassword', { required: true })}
            />
            <IconPassword onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </IconPassword>
          </InputContainerForPassword>
          {/* {errors.newPassword && ( */}
          {/*  <StyledErrorMessage> */}
          {/*    {errors.newPassword.message} */}
          {/*  </StyledErrorMessage> */}
          {/* )} */}

          <Label htmlFor="confirmNewPassword">Confirmação:</Label>
          <InputContainerForPassword>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Confirme a Nova Senha"
              {...register('confirmNewPassword', { required: true })}
            />
            <IconPassword onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
            </IconPassword>
          </InputContainerForPassword>
          {/* {errors.confirmNewPassword && <LabelError>{errors.confirmNewPassword.message}</LabelError>} */}

          <Button type="submit">Alterar Senha</Button>
        </form>
      </ModalContainer>
    </ModalBackdrop>
  )
}
