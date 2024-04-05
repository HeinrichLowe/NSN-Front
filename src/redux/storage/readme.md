# Explanation of the 'storage.ts' file | EN

### This file is necessary to resolve the error:

- "redux-persist failed to create sync storage. falling back to noop  storage."

##
### Below is an explanation of each part of the code:

1. > **createNoopStorage:** This function creates a dummy storage object that simulates the storage behavior but does nothing. It implements the getItem, setItem and removeItem methods returning Promises resolved with null or empty values. This allows the code to function without throwing errors in server environments.

2. > **Execution condition in browser:** The code checks whether the window object is defined, which indicates that the code is running in a browser environment. If so, it uses createWebStorage to create a local storage instance. If not, it uses createNoopStorage to create a dummy storage instance.

3. > **createWebStorage:** This function is provided by redux-persist and is used to create storage instances based on the web storage type such as localStorage or sessionStorage. Here it is used to create a localStorage instance.

4. > **Exporting the storage:** The resulting storage is exported for use in configuring redux-persist, replacing the direct import of redux-persist/lib/storage.

##
### In short, this is an elegant solution to addressing the problem by ensuring that code does not fail in server environments, while still allowing persistent storage to function correctly in browser environments.

                    ____________________________Border____________________________


# Explicação do arquivo 'storage.ts' | PT-BR

### Esse arquivo se faz necessário para resolver o erro:

- "redux-persist failed to create sync storage. falling back to noop  storage."
##
### Agora abaixa uma explicação de cada parte do código:

1. > **createNoopStorage:** Essa função cria um objeto de armazenamento fictício que simula o comportamento do armazenamento, mas não faz nada. Ele implementa os métodos getItem, setItem e removeItem retornando Promises resolvidas com valores nulos ou vazios. Isso permite que o código funcione sem lançar erros em ambientes de servidor.

2. > **Condição de execução no navegador:** O código verifica se o objeto window está definido, o que indica que o código está sendo executado em um ambiente de navegador. Se for o caso, ele usa createWebStorage para criar uma instância de armazenamento local. Se não for, ele usa createNoopStorage para criar uma instância de armazenamento fictícia.

3. > **createWebStorage:** Essa função é fornecida pelo redux-persist e é usada para criar instâncias de armazenamento baseadas no tipo de armazenamento da web, como localStorage ou sessionStorage. Aqui, ela é usada para criar uma instância de armazenamento local (localStorage).

4. > **Exportação do armazenamento:** O armazenamento resultante é exportado para uso na configuração do redux-persist, substituindo a importação direta de redux-persist/lib/storage.

##
### Em resumo, essa é uma solução elegante de lidar com o problema ao garantir que o código não falhe em ambientes de servidor, enquanto ainda permite que o armazenamento persistente funcione corretamente em ambientes de navegador.