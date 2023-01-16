import { Container, Form, SubmitContainer, Title, TwoInputsContainer } from "@/styles/pages/productRegistration";
import Head from "next/head";
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductRegistration() {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm()
    
    const onSubmit = async (data) => {
    const notify = () => toast.success('Produto adicionado ao estoque!')
    notify()
    const newBookData = JSON.stringify(data)
    //Mandar objeto para API
    reset()
    }

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
                <Title>Cadastrar novo produto</Title>
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <TwoInputsContainer>
                            <label>
                            ISBN:
                            <input
                                name="name"
                                type="number"
                                placeholder="Verifique o ISBN"
                                {...register('isbn', { required: 'ISBN obrigatório' })}
                            />
                            {errors.isbn && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                {errors.isbn.message}
                                </span>
                            )}
                            </label>
                
                            <label>
                                Nome do produto:
                                <input
                                name="name"
                                type="text"
                                placeholder="Digite aqui o nome do produto"
                                {...register('name', { required: 'Nome do produto obrigatório'})}
                                />
                                {errors.name && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                    {errors.name.message}
                                </span>
                                )}
                            </label>
                        </TwoInputsContainer>
            
                        <TwoInputsContainer>
                            <label>
                                Autor:
                                <input
                                name="author"
                                type="text"
                                placeholder="Digite aqui o autor"
                                {...register('author', {
                                    required: 'Autor obrigatório',
                                })}
                                />
                                {errors.author && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                    {errors.author.message}
                                </span>
                                )}
                            </label>
                
                            <label>
                            Ano de publicação:
                            <input
                                name="year"
                                type="number"
                                placeholder="Digite aqui o ano de publicação"
                                {...register('year', {
                                required: 'Ano de publicação obrigatório',
                                })}
                            />
                            {errors.year && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                {errors.year.message}
                                </span>
                            )}
                            </label>
                        </TwoInputsContainer>
            
                        <TwoInputsContainer>
                            <label>
                                Gênero:
                                <input
                                name="genre"
                                type="text"
                                placeholder="Digite aqui o gênero do livro"
                                {...register('genre', {
                                    required: 'Gênero obrigatório',
                                })}
                                />
                                {errors.genre && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                    {errors.genre.message}
                                </span>
                                )}
                            </label>
                
                            <label>
                                Capa:
                                <input
                                name="bookcover"
                                type="file"
                                accept="image/*"
                                placeholder="Selecione uma imagem com a capa do livro"
                                {...register('bookcover', {
                                    required: 'Imagem de capa obrigatória',
                                })}
                                />
                                {errors.bookcover && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                    {errors.bookcover.message}
                                </span>
                                )}
                            </label>
                        </TwoInputsContainer>
            

                        <TwoInputsContainer>
                            <label>
                            Quantidade:
                            <input
                                name="amount"
                                type="number"
                                placeholder="Digite aqui a quantidade que deseja cadastrar"
                                {...register('amount', {
                                required: 'Quantidade obrigatória',
                                })}
                            />
                            {errors.amount && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                {errors.amount.message}
                                </span>
                            )}
                            </label>
                
                            <label>
                            Preço sugerido pela editora:
                            <input
                                name="sugestPrice"
                                type="text"
                                placeholder="Digite aqui o preço sugerido"
                                {...register('sugestPrice', { required: 'Preço sugerido obrigatório' })}
                            />
                            {errors.sugestPrice && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                {errors.sugestPrice.message}
                                </span>
                            )}
                            </label>
                        </TwoInputsContainer>


                        <TwoInputsContainer>
                            <label>
                                Preço de venda:
                                <input
                                name="price"
                                type="text"
                                placeholder="Digite aqui o preço de venda"
                                {...register('price', {
                                    required: 'Preço de venda obrigatório',
                                })}
                                />
                                {errors.price && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                    {errors.price.message}
                                </span>
                                )}
                            </label>
                
                            <label>
                                Sinopse:
                                <input
                                name="synopsis"
                                type="text"
                                placeholder="Digite uma sinopse para esse livro"
                                {...register('synopsis', {
                                    required: 'Campo obrigatório',
                                })}
                                />
                                {errors.synopsis && (
                                <span style={{ color: '#f00', fontStyle: 'italic' }}>
                                    {errors.synopsis.message}
                                </span>
                                )}
                            </label>
                        </TwoInputsContainer>
            
                        <SubmitContainer>
                            <input
                                type="submit"
                                value="Cadastrar"
                                style={{ cursor: 'pointer' }}
                            />
                        </SubmitContainer>
                    </Form>
                </Container>
            </main>
        </>
    )
}  

          
