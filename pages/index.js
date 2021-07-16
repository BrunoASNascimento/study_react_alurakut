import MainGrid from "../src/componets/MainGrid";
import Box from "../src/componets/Box";
import { AlurakutMenu } from "../src/lib/AlurakutCommons";

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "BrunoasNascimento";

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>Bem vindo</Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <Box>Comunidades</Box>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
