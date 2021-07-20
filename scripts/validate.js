const inputParams = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveButtonClass: 'form__button-save_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active',
  }
  
  const showInputError = (formElement, inputElement, inputErrorClass, errorClass, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  };
  
  const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    errorMessage = inputElement.validationMessage;
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputErrorClass, errorClass, errorMessage);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };
  
  const setEventListeners = (formElement, inputSelector, inputErrorClass, submitButtonSelector, inactiveButtonClass, errorClass) => {
    const inputs = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonSubmit = formElement.querySelector(submitButtonSelector);
    inactiveButton(inputs, buttonSubmit, inactiveButtonClass);
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            inactiveButton(inputs, buttonSubmit, inactiveButtonClass);
        });
    });
  };

  const hasInvalidInput = (inputs) => {
    return inputs.some((inputElement) => {
        return !inputElement.validity.valid;
    });
  };
  
  const enableValidation = ({ formSelector, inputSelector, inputErrorClass, submitButtonSelector, inactiveButtonClass, errorClass }) => {
    const form = Array.from(document.querySelectorAll(formSelector));
    form.forEach((formElement) => {
        formElement.addEventListener('sumbit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, inputSelector, inputErrorClass, submitButtonSelector, inactiveButtonClass, errorClass);
    });
  }
  
  const inactiveButton= (inputs, buttonSubmit, inactiveButtonClass) => {
    if (hasInvalidInput(inputs)) {
        buttonSubmit.classList.add(inactiveButtonClass);
        buttonSubmit.disabled = true;
    } else {
        buttonSubmit.classList.remove(inactiveButtonClass);
        buttonSubmit.disabled = false;
    }
  };
  
  enableValidation(inputParams);