import { styled } from '..'

export const TitleAndSearch = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const Title = styled('h2', {
    margin: '20px 0'
})

export const Search = styled('form', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  
    'input[type=text]': {
      height: '35px',
      width: '450px',
      border: 'none',
      fontFamily: 'sans-serif',
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      background: '$white',
      outline: 'none',
      padding: '5px 20px',
      fontSize: '16px',
      alignItems: 'center',
    },
  
    'input[type=submit]': {
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      height: '35px',
      width: '80px',
      background: '$lightYellow',
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
  
      '&:hover': {
        cursor: 'pointer',
        background: '#BFB88B',
      },
    },

})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '1180px',
  padding: '0 0 30px 0',
  marginBottom: '50px',
})

export const Booklist = styled('li', {
    listStyle: 'none',
    background: '$white',
    width: '100%',
    marginBottom: '10px',
    borderRadius: '10px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
})

export const ContentWrapper = styled('div', {})

export const BookTitle = styled('h3', {
    marginBottom: '10px'
})

export const BookDescription = styled('p', {
    marginBottom: '5px'
})

export const B = styled('span', {
    fontWeight: 'bold',
})