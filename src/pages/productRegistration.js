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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registrationSchema = yup
  .object({
    name: yup
      .string("Este campo só permite texto")
      .required("Este campo é obrigatório"),
    author: yup
      .string("Este campo só permite texto")
      .required("Este campo é obrigatório"),
    year: yup
      .number()
      .integer("Este campo não pode conter decimais")
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    genre: yup
      .string("Este campo só permite texto")
      .required("Este campo é obrigatório"),
    bookcover: yup
      .string("Este campo só permite texto")
      .required("Este campo é obrigatório"),
    amount: yup
      .number()
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    sugestPrice: yup
      .number()
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    price: yup
      .number()
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    synopsis: yup
      .string("Este campo só permite texto")
      .required("Este campo é obrigatório"),
    language: yup
      .string("Este campo só permite texto")
      .required("Este campo é obrigatório"),
    isbn: yup
      .number()
      .required("Este campo é obrigatório")
      .typeError("Este campo só permite números"),
    manufacturer: yup
      .string("Este campo só permite texto")
      .required("Este campo é obrigatório"),
    dimensions: yup
      .string("Este campo só permite texto")
      .required("Este campo é obrigatório"),
  })
  .required();

export default function ProductRegistration() {
  const [isLoading, seIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationSchema) });

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
        isbn: String(data.isbn),
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
                  step="1"
                  placeholder="Verifique o ISBN"
                  {...register("isbn")}
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
                  placeholder="Digite aqui o nome do produto"
                  {...register("name")}
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
                  placeholder="Digite aqui o autor"
                  {...register("author")}
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
                  step="1"
                  placeholder="Digite aqui o ano de publicação"
                  {...register("year")}
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
                  placeholder="Digite aqui o gênero do livro"
                  {...register("genre")}
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
                  placeholder="Selecione uma imagem (URL) com a capa do livro"
                  {...register("bookcover")}
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
                  step="1"
                  placeholder="Digite aqui a quantidade que deseja cadastrar"
                  {...register("amount")}
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
                  step="0.01"
                  placeholder="Digite aqui o preço sugerido"
                  {...register("sugestPrice")}
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
                  step="0.01"
                  placeholder="Digite aqui o preço de venda"
                  {...register("price")}
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
                  placeholder="Digite uma sinopse para esse livro"
                  {...register("synopsis")}
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
                  placeholder="Digite aqui o idioma do produto"
                  {...register("language")}
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
                  placeholder="Digite a editora do produto"
                  {...register("manufacturer")}
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
                  placeholder="Digite aqui as dimensões do produto"
                  {...register("dimensions")}
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
