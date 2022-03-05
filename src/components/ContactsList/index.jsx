import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icon/arrow.svg';
import edit from '../../assets/images/icon/edit.svg';
import trash from '../../assets/images/icon/trash.svg';

export function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Guilherme de Prais</strong>
              <small>instagram</small>
            </div>
            <span>guilherme.prais@gmail.com</span>
            <span>(11) 99999-999</span>
          </div>

          <div className="actions">
            <a href="/node_modules">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Guilherme de Prais</strong>
              <small>instagram</small>
            </div>
            <span>guilherme.prais@gmail.com</span>
            <span>(11) 99999-999</span>
          </div>

          <div className="actions">
            <a href="/node_modules">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Guilherme de Prais</strong>
              <small>instagram</small>
            </div>
            <span>guilherme.prais@gmail.com</span>
            <span>(11) 99999-999</span>
          </div>

          <div className="actions">
            <a href="/node_modules">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
