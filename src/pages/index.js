import { B, BookDescription, Booklist, BookTitle, Container, ContentWrapper, Search, Title, TitleAndSearch } from '@/styles/pages/home'
import Head from 'next/head'
import { BookData } from '@/utils/jsonServer'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    alert(`Você pesquisou por: ${data.search}`)
    // http://localhost:3000/categoryList/ResultadoDaBusca
  }

  return (
    <>
      <Head>
        <title>Sebus - Admin</title>
      </Head>
      <main>
        <TitleAndSearch>
          <Title>Produtos cadastrados</Title>
          <Search onSubmit={handleSubmit(onSubmit)}>
            <input
              name="search"
              type="text"
              placeholder="Digite o nome do produto que deseja encontrar..."
              {...register('search', { required: true })}
            />

            <input type="submit" value="Buscar" />
          </Search>
        </TitleAndSearch>
        <Container>
          <ul>
          {BookData.map((book) => {
            return (
              <Booklist key={book.id}>
                <Image src={book.image} height={120} alt=''/>

                <ContentWrapper>
                  <BookTitle>{book.livro}</BookTitle>
                  <BookDescription><B>Autor:</B> {book.autor}</BookDescription>
                  <BookDescription><B>Ano de publicação:</B> {book.ano}</BookDescription>
                  <BookDescription><B>Gênero:</B> {book.genero}</BookDescription>
                  <BookDescription><B>Quantidade em estoque:</B> {book.quantidade}</BookDescription>
                  <BookDescription><B>Preço unitário:</B> R$ {book.preco.toFixed(2)}</BookDescription>
                </ContentWrapper>
              

              </Booklist>
            )
          })}
          </ul>
        </Container>
      </main>
    </>
  )
}
