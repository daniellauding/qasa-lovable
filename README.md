# Qasa Experiments

This repository contains various experiments and prototypes for Qasa's rental platform features.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

## 📦 Creating New Experiments

To create a new experiment:

```bash
npm run new-experiment
```

This will:
1. Create the experiment directory structure
2. Set up the component files
3. Create Storybook stories
4. Add it to the main App.jsx

## 📁 Project Structure

```
src/
├── components/        # Shared components
├── prototypes/       # Experiments and prototypes
│   ├── tenants/     # Tenant-focused experiments
│   └── landlords/   # Landlord-focused experiments
└── stories/         # Storybook stories
```

## 🧪 Development

- Each experiment is isolated in its own directory under `src/prototypes`
- Components specific to an experiment should be in the experiment's `components` directory
- Shared components go in `src/components`
- Every component should have a corresponding story in `src/stories`

## 📚 Storybook

We use Storybook for:
- Component development and testing
- Visual documentation
- Experiment previews

Access it by running:
```bash
npm run storybook
```

## 🔄 Git Workflow

1. Create a new branch for your experiment:
   ```bash
   git checkout -b experiment/feature-name
   ```

2. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add new experiment feature"
   ```

3. Push your changes:
   ```bash
   git push origin experiment/feature-name
   ```

4. Create a Pull Request when ready for review 