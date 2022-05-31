
  var estados = [
    {sigla: 'AC', uf: 'Acre', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'AL', uf: 'Alagoas', link: ''},
    {sigla: 'AP', uf: 'Amapá', link: 'https://registrodetran.com.br/ap/'},
    {sigla: 'AM', uf: 'Amazonas', link: 'https://www.gecov.com.br/autenticacao?0'},
    {sigla: 'BA', uf: 'Bahia', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'CE', uf: 'Ceará', link: 'https://sistemas.detran.ce.gov.br/portal_gravame/users/sign_in'},
    {sigla: 'DF', uf: 'Federal', link: 'https://getran.detran.df.gov.br/sna/design/index-explorer.jsp'},
    {sigla: 'ES', uf: 'Espírito Santo', link: 'http://detrannet.es.gov.br/'},
    {sigla: 'GO', uf: 'Goiás', link: 'https://portal.detran.go.gov.br/sna/'},
    {sigla: 'MA', uf: 'Maranhão', link: 'https://sirec.com.br/sirec/login.seam?cid=19501'},
    {sigla: 'MT', uf: 'Mato Grosso', link: 'https://www.detrannet.mt.gov.br/ControleAcesso/'},
    {sigla: 'MS', uf: 'Mato Grosso do Sul', link: ''},
    {sigla: 'MG', uf: 'Minas Gerais', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'PA', uf: 'Pará', link: 'https://www.gecov.com.br/autenticacao?0'},
    {sigla: 'PB', uf: 'Paraíba', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'PR', uf: 'Paraná', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'PE', uf: 'Pernambuco', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'PI', uf: 'Piauí', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'RJ', uf: 'Rio de Janeiro', link: 'https://www.cbtiregistros.com.br/rj'},
    {sigla: 'RN', uf: 'Rio Grande do Norte', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'RS', uf: 'Rio Grande do Sul', link: 'https://www.credenciados.detran.rs.gov.br'},
    {sigla: 'RO', uf: 'Rondônia', link: 'https://detrannet.detran.ro.gov.br/'},
    {sigla: 'RR', uf: 'Roraima', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'SC', uf: 'Santa Catarina', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'SP', uf: 'São Paulo', link: 'https://sielloregistros.com/#/login'},
    {sigla: 'SE', uf: 'Sergipe', link: 'https://registrocontrato.detran.se.gov.br/login'},
    {sigla: 'TO', uf: 'Tocantins', link: 'https://snrd.eigmercados.com.br/snr/'},
  ];

  function getLink(sigla) {
    const item = estados.find(item => item.sigla === sigla);
    return item.link;
  }

  function handleClick(sigla) {
    const link = getLink(sigla);
    if (link) {
      window.open(link, '_blank');
    }
    handleAlertMsgMap(link);
  }

  const selectStates = document.querySelector('#states-select');

  function loadSelectUF() {
    // Create options of UFs.
    var optSelecione = document.createElement('option');
    optSelecione.value = 'select';
    optSelecione.innerHTML = 'Selecione...';
    selectStates.appendChild(optSelecione);
    for(item of estados) {
      var opt = document.createElement('option');
      opt.value = item.link;
      opt.innerHTML = `${item.sigla} - ${item.uf}`;
      selectStates.appendChild(opt);
    }


    // Add action for UF seleted.
    selectStates.addEventListener('change', function() {
      if (this.value && this.value !== 'select') {
        window.open(this.value, '_blank');
      }
      handleAlertMsgSelect(this.value);
    });
  }

  const msgMap = document.querySelector('#linkMapNaoEncontrado');
  const msgSelect = document.querySelector('#linkNaoEncontrado');
  
  
  function handleAlertMsgMap(value) {
    msgSelect.textContent = '';
    selectStates.value = 'select';
    if (value) {
      msgMap.textContent = '';
    } else {
      msgMap.textContent = 'Link não cadastrado.';
    }
  }

  function handleAlertMsgSelect(value) {
    msgMap.textContent = '';
    if (value) {
      msgSelect.textContent = '';
    } else {
      msgSelect.textContent = 'Link não cadastrado.';
    }
  }

loadSelectUF();
