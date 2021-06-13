const showInfo = (container, text, isSucess) => {
  // eslint-disable-next-line no-param-reassign
  container.innerText = text;
  const className = container.classList;
  if (!className.contains('show')) className.add('show');
  if (className.contains('success')) className.remove('success');
  if (className.contains('error')) className.remove('error');
  className.add(isSucess ? 'success' : 'error');
};

export default showInfo;
