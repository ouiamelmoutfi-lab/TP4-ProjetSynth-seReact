
function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li
      style={{
        textDecoration: tache.terminee ? 'line-through' : 'none',
      }}
    >
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => changerEtat(tache.id)}
      />

      {tache.texte}

      <button onClick={() => supprimerTache(tache.id)}>
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
