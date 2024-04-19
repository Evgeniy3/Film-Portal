import React from 'react'

const ErrorFallBack = ({error, resetErrorBoundary}) => {
  return (
    <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            {error.message}
          </p>
          <button onClick={resetErrorBoundary} className='button'>
            Вернутся на глваный экран?
          </button>
    </div>
  )
}

export default ErrorFallBack;