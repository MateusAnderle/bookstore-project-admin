import { B, BookDescription, Booklist, BookTitle, Container, ContentWrapper, Title, ImageAndContent, ButtonIcons } from '@/styles/pages/home'
import Head from 'next/head'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import { api } from '@/utils/api'
import Loader from '@/components/Loader'
import { PencilSimple, Trash } from 'phosphor-react'

import { Oval } from  'react-loader-spinner'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [iconIsLoading, setIconIsLoading] = useState(false)

  async function fetchBooks() {
    const response = await api.get('/products')
    setData(response?.data)
    setIsLoading(false)
  }

  function editBook(id){
    router.push(`/editProduct/${id}`)
  }

  async function deleteBook(id){
    try {
      setIconIsLoading(true)
      await api.delete(`/products/${id}`)
      const notify = () => toast.success('Produto removido do estoque!')
      notify()
      setIconIsLoading(false)

    } catch (error) {
      console.log(error)
      const notify = () => toast.error('Erro ao deletar produto!')
      notify()
    }
  }

  useEffect(() => {
    fetchBooks()
    setIsLoading(false)
  }, [data])

  return (
    <>
      <Head>
        <title>Sebus - Admin</title>
      </Head>
         
      <main>
        <ToastContainer
          style={{ marginTop: '60px' }}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
          <Title>Produtos cadastrados</Title>
        <Container>
          <ul>

          {isLoading ? (
          <Loader />
        ) : ( 
          data?.length > 0 &&
            data?.map((book) => {
              return (
                <Booklist key={book._id}>
                  
                  <ImageAndContent>
                    <Image src={book.image} height={120} width={120} alt=''/>

                    <ContentWrapper>
                      <BookTitle>{book.livro}</BookTitle>
                      <BookDescription><B>Autor:</B> {book.autor}</BookDescription>
                      <BookDescription><B>Ano de publicação:</B> {book.ano}</BookDescription>
                      <BookDescription><B>Gênero:</B> {book.genero}</BookDescription>
                      <BookDescription><B>Quantidade em estoque:</B> {book.quantidade}</BookDescription>
                      <BookDescription><B>Preço unitário:</B> R$ {book.preco.toFixed(2)}</BookDescription>
                    </ContentWrapper>
                  </ImageAndContent>
                  

                  <ButtonIcons>
                      { iconIsLoading &&
                        <Oval
                            height={35}
                            width={35}
                            color="#F00"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#F00"
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                      }

                    <button onClick={() => editBook(book._id)}>
                      <PencilSimple size={24} /> Editar 
                    </button>
                  
                    <button onClick={() => deleteBook(book._id)}>
                      <Trash size={24} /> Excluir 
                    </button>
                    
                  </ButtonIcons>
                 </Booklist>
              )
            })
          )}
          </ul>
        </Container>
      </main>
    </>
  )
}
