import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import NotesSection from "./components/NotesSection";
import Popup from "./components/Popup";
import Footer from "./components/Footer";

const initialGroups = [
  {
    id: 1,
    titulo: "Seja Bem-Vindo ao Organizer Web",
    descricao: "14 fotos",
    tempo: "15 h",
    texto: "Este é um aplicativo de anotações simples e eficiente, projetado para ajudá-lo a organizar suas ideias, tarefas e informações importantes.",
    dataCriacao: "2026-07-20T10:00:00",
  },
  {
    id: 2,
    titulo: "Organize suas anotações com facilidade",
    descricao: "10 fotos",
    tempo: "5 h",
    texto: "Com uma interface intuitiva e recursos práticos, o Organizer Web te ajuda a criar grupos de anotações, adicionar textos e gerenciar suas informações de forma rápida e fácil.",
    dataCriacao: "2026-07-20T10:00:00",
  },
  {
    id: 3,
    titulo: "Mantenha suas anotações sempre à mão",
    descricao: "20 fotos",
    tempo: "2 h",
    texto: "Aproveite a experiência de manter suas anotações sempre à mão e bem organizadas.",
    dataCriacao: "2026-07-20T10:00:00",
  },
];

const App = () => {
  const [groups, setGroups] = useState(() => {
    const savedGroups = localStorage.getItem("groups");

      // Carregando os grupoa salvos do localStorage
    if (savedGroups) {
      return JSON.parse(savedGroups);
    }

    return initialGroups;
  });

  const [selectedGroup, setselectedGroup] = useState(null);
  const [popupOpened, setpopupOpened] = useState(false);

  // Salvando os grupos no localStorage
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  // Adiciona um novo grupo
  const adicionarGrupo = () => {
    const newGroup = {
      id: Date.now(),
      titulo: `Grupo ${groups.length + 1}`,
      descricao: "0 fotos",
      tempo: "agora",
      texto: "",
      dataCriacao: new Date().toISOString(),
    };
  
    setGroups((anotherGroups) => [
      ...anotherGroups,
      newGroup,
    ]);
  };

  // Selecionando um grupo e abre o popup
  const selecionarGrupo = (id) => {
    setselectedGroup(id);
    setpopupOpened(true);
  };

  // Fechando o popup
  const closePopup = () => {
    setpopupOpened(false);
    setselectedGroup(null);
  };

  // Deletando um grupo
  const deleteGroup = (id) => {
    setGroups((anotherGroups) =>
      anotherGroups.filter((group) => group.id !== id)
    );

    closePopup();
  };

  // Encontrando o grupo que está selecionado
  const currentGroup = groups.find(
    (group) => group.id === selectedGroup
  );

  const changeTittle = (newTittle) => {
    setGroups((anotherGroups) =>
      anotherGroups.map((group) =>
        group.id === selectedGroup
          ? { ...group, titulo: newTittle }
          : group
      )
    );
  };

  const changeText = (newText) => {
    setGroups((anotherGroups) =>
      anotherGroups.map((group) =>
        group.id === selectedGroup
          ? { ...group, texto: newText }
          : group
      )
    );
  };

  return (
    <>
      <Header />

      <main>

        <Hero />

        <NotesSection
          groups={groups}
          adicionarGrupo={adicionarGrupo}
          selecionarGrupo={selecionarGrupo}
        />

        {popupOpened && currentGroup && (
          <Popup
            currentGroup={currentGroup}
            changeTittle={changeTittle}
            changeText={changeText}
            closePopup={closePopup}
            deleteGroup={deleteGroup}
          />
        )}
        <Footer/>
      </main>
    </>
  );
};

export default App;