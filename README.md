TODOS: 
- [x] Add generative blobs script for dynamic blobs
- [x] Implement generative blobs
- [ ] Submit minihack
- [ ] Finish readme and instructions

# generative-wrappers
Infinite Polywrappers! 

For every published polywrapper, we'd like to create a distinct wrapper svg animation which can be used to recognize an user's  

![Polywrapper Image](TODOADDLINK)

### Project specs:
- SVG
- HTML
- No CSS
- SMIL standard
- ...
  
Data flow:
### Inputs:
- The ENS address, IPFS hash, or other CID that points to a polywrapper manifest (i.e.: `web3api.meta.yaml`)

*this CID is then decomposed as:*
- Number of dependencies (ethereum, gnosis)
- Dep: all required types (Ethereum_Query, Ethereum_TxReceipt, ...)
- Package size ("Ethereum's query modules is 500kb")
- Metadata = title, description, icon

### Outputs:
- Animated SVG: `/outputs/{wrapper-name-hash.svg}`
- Simple HTML: `/outputs/{wrapper-name-hash.html}` 

### How to use:
1. Input your polywrapper's ENS or IPFS CID
2. Run `TODO` to generate your animated SVG and HTML files.


### Animation States
1. Fully Formed
- SVG of the Polywrap (gnosis.svg)
- Full circle in the center

2. Begin Transition
- Center logo shrinks and becomes transparent
- Blobs FOR EACH dependency emerge from the background
- Blobs are in their maximelly distorted form
- Blobs start from the center and move towards their end position

3. Morph some more (this can happen several times)
- add another morph shape for interesting visual transformation
- move the position slowly towards the end position

...

N. Fully Decomposed
- Circles for each dependency (ethereum, etc, etc)
- Full circles


Join our community:
 - [Discord]()