# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login_codegen.spec.js >> Negative Login Tests >> Same email should not register with another dropdown option
- Location: tests\login_codegen.spec.js:89:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f1e6]:
  - generic [ref=f1e7]:
    - generic [ref=f1e8]:
      - heading "Login" [level=2] [ref=f1e9]
      - paragraph [ref=f1e10]: Sign in to continue
    - generic [ref=f1e11]:
      - generic [ref=f1e14]:
        - generic [ref=f1e15]:
          - generic [ref=f1e16]:
            - text: Email Address
            - generic [aria-hidden] [ref=f1e17]: "*"
          - textbox "Email Address" [ref=f1e18]
        - generic [ref=f1e19]:
          - img [aria-hidden]: email
      - generic [ref=f1e23]:
        - generic [ref=f1e24]:
          - generic [ref=f1e25]:
            - text: Password
            - generic [aria-hidden] [ref=f1e26]: "*"
          - textbox "Password" [ref=f1e27]:
            - /placeholder: Enter Password
        - button [ref=f1e29] [cursor=pointer]:
          - img [aria-hidden] [ref=f1e30]: visibility_off
      - button "Login" [ref=f1e34]
      - generic [ref=f1e38] [cursor=pointer]:
        - text: Don't have an account?
        - generic [ref=f1e39]: SignUp
  - generic [ref=f1e40]:
    - generic [ref=f1e41]:
      - heading "Signup" [level=2] [ref=f1e42]
      - paragraph [ref=f1e43]: Create your AeroSlot account
    - generic [ref=f1e44]:
      - generic [ref=f1e45]:
        - generic [ref=f1e49] [cursor=pointer]:
          - generic [ref=f1e50]:
            - text: Select Operator
            - generic [aria-hidden] [ref=f1e51]: "*"
          - combobox "Select Operator" [ref=f1e52]
        - generic [ref=f1e64]:
          - generic [ref=f1e65]:
            - text: Username
            - generic [aria-hidden] [ref=f1e66]: "*"
          - textbox "Username" [ref=f1e67]
      - generic [ref=f1e69]:
        - generic [ref=f1e72]:
          - generic [ref=f1e73]:
            - generic [ref=f1e74]:
              - text: Email Address
              - generic [aria-hidden] [ref=f1e75]: "*"
            - textbox "Email Address" [ref=f1e76]
          - generic [ref=f1e77]:
            - img [aria-hidden]: email
        - generic [ref=f1e81]:
          - generic [ref=f1e82]:
            - generic [ref=f1e83]:
              - text: Phone Number
              - generic [aria-hidden] [ref=f1e84]: "*"
            - textbox "Phone Number" [ref=f1e85]
          - generic [ref=f1e86]:
            - img [aria-hidden]: phone
      - generic [ref=f1e88]:
        - generic [ref=f1e91]:
          - generic [ref=f1e92]:
            - generic [ref=f1e93]:
              - text: Password
              - generic [aria-hidden] [ref=f1e94]: "*"
            - textbox "Password" [ref=f1e95]
          - img [aria-hidden] [ref=f1e97] [cursor=pointer]: visibility
        - generic [ref=f1e101]:
          - generic [ref=f1e102]:
            - generic [ref=f1e103]:
              - text: Confirm Password
              - generic [aria-hidden] [ref=f1e104]: "*"
            - textbox "Confirm Password" [ref=f1e105]
          - img [aria-hidden] [ref=f1e107] [cursor=pointer]: visibility
      - button "Signup" [ref=f1e109]
      - generic [ref=f1e113] [cursor=pointer]:
        - text: Already have an account?
        - generic [ref=f1e114]: Login
```