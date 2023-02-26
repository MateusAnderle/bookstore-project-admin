import {
  Container,
  Form,
  SubmitContainer,
  Title,
  TwoInputsContainer,
} from "@/styles/pages/productRegistration";
import { api } from "@/utils/api";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import { useState } from "react";

export default function ProductRegistration() {
  const [isLoading, seIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      seIsLoading(true);
      await api.post("/products", {
        livro: data.name,
        autor: data.author,
        ano: Number(data.year),
        genero: data.genre,
        image: data.bookcover,
        quantidade: Number(data.amount),
        precoSugerido: Number(data.sugestPrice),
        preco: Number(data.price),
        sinopse: data.synopsis,
        idioma: data.language,
        isbn: data.isbn,
        fabricante: data.manufacturer,
        dimensoes: data.dimensions,
      });
      seIsLoading(false);
      reset();
      const notify = () => toast.success("Produto adicionado ao estoque!");
      notify();
    } catch (error) {
      console.log(error);
      const notify = () => toast.error("Erro ao cadastrar!");
      notify();
    }
  };

  return (
    <>
      <Head>
        <title>Sebus - Admin</title>
      </Head>
      <main>
        <ToastContainer
          style={{ marginTop: "60px" }}
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
                  name="isbn"
                  type="number"
                  placeholder="Verifique o ISBN"
                  {...register("isbn", { required: "ISBN obrigatório" })}
                />
                {errors.isbn && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
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
                  {...register("name", {
                    required: "Nome do produto obrigatório",
                  })}
                />
                {errors.name && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
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
                  {...register("author", {
                    required: "Autor obrigatório",
                  })}
                />
                {errors.author && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
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
                  {...register("year", {
                    required: "Ano de publicação obrigatório",
                  })}
                />
                {errors.year && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
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
                  {...register("genre", {
                    required: "Gênero obrigatório",
                  })}
                />
                {errors.genre && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
                    {errors.genre.message}
                  </span>
                )}
              </label>

              <label>
                Capa:
                <input
                  name="bookcover"
                  type="text"
                  placeholder="Selecione uma imagem (URL) com a capa do livro"
                  {...register("bookcover", {
                    required: "Imagem de capa obrigatória",
                  })}
                />
                {errors.bookcover && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
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
                  {...register("amount", {
                    required: "Quantidade obrigatória",
                  })}
                />
                {errors.amount && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
                    {errors.amount.message}
                  </span>
                )}
              </label>

              <label>
                Preço sugerido pela editora:
                <input
                  name="sugestPrice"
                  type="number"
                  placeholder="Digite aqui o preço sugerido"
                  {...register("sugestPrice", {
                    required: "Preço sugerido obrigatório",
                  })}
                />
                {errors.sugestPrice && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
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
                  type="number"
                  placeholder="Digite aqui o preço de venda"
                  {...register("price", {
                    required: "Preço de venda obrigatório",
                  })}
                />
                {errors.price && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
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
                  {...register("synopsis", {
                    required: "Campo obrigatório",
                  })}
                />
                {errors.synopsis && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
                    {errors.synopsis.message}
                  </span>
                )}
              </label>
            </TwoInputsContainer>

            <TwoInputsContainer>
              <label>
                Idioma do livro:
                <input
                  name="language"
                  type="text"
                  placeholder="Digite aqui o idioma do produto"
                  {...register("language", {
                    required: "Idioma obrigatório",
                  })}
                />
                {errors.language && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
                    {errors.language.message}
                  </span>
                )}
              </label>

              <label>
                Editora:
                <input
                  name="manufacturer"
                  type="text"
                  placeholder="Digite a editora do produto"
                  {...register("manufacturer", {
                    required: "Editora obrigatório",
                  })}
                />
                {errors.manufacturer && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
                    {errors.manufacturer.message}
                  </span>
                )}
              </label>
            </TwoInputsContainer>

            <TwoInputsContainer>
              <label>
                Dimensões do livro:
                <input
                  name="dimensions"
                  type="text"
                  placeholder="Digite aqui as dimensões do produto"
                  {...register("dimensions", {
                    required: "Dimensões obrigatórias",
                  })}
                />
                {errors.dimensions && (
                  <span style={{ color: "#f00", fontStyle: "italic" }}>
                    {errors.dimensions.message}
                  </span>
                )}
              </label>
            </TwoInputsContainer>

            <SubmitContainer>
              <input
                type="submit"
                value="Cadastrar"
                style={{ cursor: "pointer" }}
              />
              {isLoading && (
                <Oval
                  height={30}
                  width={30}
                  color="#F00"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#F00"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              )}
            </SubmitContainer>
          </Form>
        </Container>
      </main>
    </>
  );
}
